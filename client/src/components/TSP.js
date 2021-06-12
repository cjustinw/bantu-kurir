import haversine from 'haversine-distance';

const copyMatrix = (matriks) => {
  if(matriks instanceof Array){
    let cpyMatriks = [];
    matriks.forEach(array => {
      let tmpArray = [];
      array.forEach(elmt => {
        tmpArray.push(elmt);
      })
      cpyMatriks.push(tmpArray);
    });
    return cpyMatriks;
  }
}

const RCM = (Matriks) => {
  if(Matriks instanceof Array){
    let matriks = copyMatrix(Matriks);
    let cost = 0;
    for(let i = 0; i < matriks.length; i++){
      let tmp = matriks[i].filter(elmt => elmt !== -1);
      if(tmp.length !== 0){
        let min = tmp[0];
        tmp.forEach(elmt => {
          if(elmt < min){
            min = elmt;
          }
        });
        if(min !== 0){
          for(let j = 0; j < matriks.length; j++){
            if(matriks[i][j] !== -1){
              matriks[i][j] -= min;
            }
          }
          cost += min;
        }
      }
    }
    
    for(let i = 0; i < matriks.length; i++){
      let tmp = [];
      for(let j = 0; j < matriks.length; j++){
        if(matriks[j][i] !== -1){
          tmp.push(matriks[j][i]);
        }
      }
      if(tmp.length !== 0){
        let min = tmp[0];
        tmp.forEach(elmt => {
          if(elmt < min){
            min = elmt;
          }
        });
        if(min !== 0){
          for(let j = 0; j < matriks.length; j++){
            if(matriks[j][i] !== -1){
              matriks[j][i] -= min;
            }
          }
          cost += min;
        }
      }
    }
    return {matrix: matriks, cost: cost}
  }
}


export const createMatrix = (data) => {
  if(data instanceof Array){
    let matriks = [];
    let length = data.length;

    for(let i = 0; i < length; i++){
      let tmpArray = [];
      for(let j = 0; j < length; j++){
        tmpArray.push(0);
      }
      matriks.push(tmpArray);
    }

    for(let i = 0; i < length; i++){
      for(let j = i; j < length; j++){
        if(i === j){
          matriks[i][j] = -1;
        }
        else{
          let a = {lat: data[i].latitude, lng: data[i].longitude};
          let b = {lat: data[j].latitude, lng: data[j].longitude};
          
          matriks[i][j] = haversine(a, b);
          matriks[j][i] = matriks[i][j];
        }
      }
    }
    return matriks;
  }
}

export const TSP = (matriks) => {
  if(matriks instanceof Array){
    let path = [];
    path.push(0);
  
    let reducedCostMatrix = RCM(matriks);
    let reducedMatrix = reducedCostMatrix.matrix;
    let cost = reducedCostMatrix.cost;

    while( path.length < matriks.length) {
      let arrayMatrix = [];
      for(let i = 0; i < matriks.length; i++){
        if(path.indexOf(i) === -1){

          let tmpMatriks = copyMatrix(reducedMatrix);
  
          let x = path[path.length-1];
          let y = i;
  
          for(let j = 0; j < tmpMatriks.length; j++) {
            tmpMatriks[x][j] = -1;
          }
  
          for(let j = 0; j < tmpMatriks.length; j++) {
            tmpMatriks[j][y] = -1;
          }
  
          tmpMatriks[y][path[0]] = -1;
          let tmpReducedCostMatrix = RCM(tmpMatriks);
          let tmpReducedMatrix = tmpReducedCostMatrix.matrix;
          let tmpCost = cost + tmpReducedCostMatrix.cost + reducedMatrix[x][y];
          arrayMatrix.push({matrix: tmpReducedMatrix, cost: tmpCost, index: i});
        }
      }
      let minCost = arrayMatrix[0].cost;
      let minIndex = 0;
      arrayMatrix.forEach((elmt, index) => {
        if(elmt.cost < minCost){
          minCost = elmt.cost;
          minIndex = index;
        }
      });
      reducedMatrix = arrayMatrix[minIndex].matrix;
      cost = arrayMatrix[minIndex].cost;
      path.push(arrayMatrix[minIndex].index);
    } 
    path.push(0);
    return {path: path, cost: cost}
  }
}
