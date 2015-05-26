/* 
 
 the function FindPath returns an array of direction
 it receives in input the location entered by the user( departure and destination )
 
*/

function FindPath(__a,__b){

/* 
 
  Dijkstra algorithm 
  is an algorithm for the calculation of the shortest path in a graph
  
*/

// Dijkstra start code

function PriorityQueue () {
  this._nodes = [];

  this.enqueue = function (priority, key) {
    this._nodes.push({key: key, priority: priority });
    this.sort();
  }
  this.dequeue = function () {
    return this._nodes.shift().key;
  }
  this.sort = function () {
    this._nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  }
  this.isEmpty = function () {
    return !this._nodes.length;
  }
}

/* Pathfinding starts here */

function Graph(){
  var INFINITY = 1/0;
  this.vertices = {};

  this.addVertex = function(name, edges){
    this.vertices[name] = edges;
  }

  this.shortestPath = function (start, finish) {
    var nodes = new PriorityQueue(),
        distances = {},
        previous = {},
        path = [],
        smallest, vertex, neighbor, alt;

    for(vertex in this.vertices) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      }
      else {
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    while(!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if(smallest === finish) {
        path;

        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if(!smallest || distances[smallest] === INFINITY){
        continue;
      }

      for(neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path;
  }
}

// Dijkstra end code

// graph of half of the DISI floor, not all locations where mapped ,only the most interesting one for us
var g = new Graph();

// we add the node to the graph with their neighbor and the distance that separate them
g.addVertex('A', {B: 9, DKM1Room: 1 }); 
g.addVertex('B', {A: 9, U: 4, EastStairs: 1}); 
g.addVertex('C', {D: 6, V: 4, H: 5}); 
g.addVertex('D', {C: 6, E: 6, MassaOffice: 1}); 
g.addVertex('E', {D: 6, T: 6, F : 3, DAndreaOffice: 1}); 
g.addVertex('F', {E: 3, G: 5, CasatiOffice: 1  }); 
g.addVertex('G', {F: 5, BattistiOffice: 1}); 
g.addVertex('H', {C: 5, I: 6, CorniselloMeetingRoom: 1}); 
g.addVertex('I', {H: 6, J: 20, MenToilette: 1}); 
g.addVertex('J', {I: 20, K: 8, TerlagoMeetingRoom: 1, WomenToilette: 1}); 
g.addVertex('K', {N: 6, J: 8, L: 11 }); 
g.addVertex('L', {K: 11, M: 14, WestStairs: 1}); 
g.addVertex('M', {L: 14, ConciOffice: 1}); 
g.addVertex('N', {O: 6, K: 6, BruzzoneOffice: 1}); 
g.addVertex('O', {P: 6, Q: 4, N: 6, PiccoOffice: 1}); 
g.addVertex('P', {O: 6, S: 15, WirelessNetworkingLab: 1}); 
g.addVertex('Q', {R: 5, O: 4, DeNataleOffice: 1}); 
g.addVertex('R', {Q: 5, GiunchigliaOffice: 1}); 
g.addVertex('S', {T: 20, P:15, MediaLab1: 1}); 
g.addVertex('T', {E: 6, S:20, DKM2Room: 1});
g.addVertex('U', {B: 4, V:3, Lift2: 3});
g.addVertex('V', {U: 3, C:4, Lift1:3}); 
g.addVertex('DKM1Room', {A: 1}); 
g.addVertex('EastStairs', {B: 1}); 
g.addVertex('Lift2', {U: 3});
g.addVertex('Lift1', {V: 3}); 
g.addVertex('MassaOffice', {D: 1}); 
g.addVertex('DAndreaOffice', {E: 1}); 
g.addVertex('CasatiOffice', {F: 1}); 
g.addVertex('BattistiOffice', {G: 1}); 
g.addVertex('CorniselloMeetingRoom', {H: 1}); 
g.addVertex('MenToilette', {I: 1}); 
g.addVertex('TerlagoMeetingRoom', {J: 1});
g.addVertex('WomenToilette', {J: 1}); 
g.addVertex('WestStairs', {L: 1}); 
g.addVertex('ConciOffice', {M: 1}); 
g.addVertex('BruzzoneOffice', {N: 1}); 
g.addVertex('PiccoOffice', {O: 1}); 
g.addVertex('WirelessNetworkingLab', {P: 1}); 
g.addVertex('DeNataleOffice', {Q: 1}); 
g.addVertex('GiunchigliaOffice', {R: 1}); 
g.addVertex('MediaLab1', {S: 1}); 
g.addVertex('DKM2Room', {T: 1});







// we store in the variable "path" ,the path given by Djisktra's algorithm
var path = []; 
path = g.shortestPath(__a,__b).concat([__a]).reverse();


// depending from the starting point and assuming you have the starting point at your back,the variable "dir" has been set in a suitable manner
var dir;

if (    
	path[0] == 'BattistiOffice' || 
    path[0] == 'CasatiOffice' || 
    path[0] == 'DKM2Room' ||
	path[0] == 'MediaLab1' ||
	path[0] == 'WirelessNetworkingLab' ||
	path[0] == 'DeNataleOffice' ||
	path[0] == 'GiunchigliaOffice' ||
	path[0] == 'CorniselloMeetingRoom' ||
	path[0] == 'MenToilette' ||
	path[0] == 'WomenToilette' ||
	path[0] == 'TerlagoMeetingRoom' 
	
	){
		
		dir = 0;
	} else if (
	
	path[0] == 'DAndreaOffice' ||
	path[0] == 'MassaOffice' ||
	path[0] == 'EastStairs' ||
	path[0] == 'DKM1Room' ||
	path[0] == 'ConciOffice' ||
	path[0] == 'WestStairs' ||
	path[0] == 'BruzzoneOffice' ||
	path[0] == 'PiccoOffice' ||
	path[0] == 'Lift1' ||
	path[0] == 'Lift2' ){

		dir = 1;	
	}





var j;
// we memorize the path in the form of arches (letter pairs) 
var _archi = []; 
for (j = 0; j < path.length-1; j++){
      _archi[j] = path[j]+ "__" + path[j+1];

}

// now we have an array with inside strings ['A__B','B__C',..] 


//we Memorize the path in an array that translates the considered arches  in direction (A_B = 0 i.e toward the positive y..)
var archi = [];

//translation of the strings in the respective directions
for (var k = 0; k < _archi.length; k++){
        if(_archi[k] == 'DKM1Room__A' ){ archi.push('1'); }
	if(_archi[k] == 'A__DKM1Room' ){ archi.push('3'); }
	if(_archi[k] == 'A__B' ){ archi.push('0'); }
        if(_archi[k] == 'B__A' ){ archi.push('2'); }
	if(_archi[k] == 'EastStairs__B' ){ archi.push('1'); }
	if(_archi[k] == 'B__EastStairs' ){ archi.push('3'); }

	if(_archi[k] == 'U__Lift2' ){ archi.push('1'); }
	if(_archi[k] == 'Lift2__U' ){ archi.push('3'); }
	if(_archi[k] == 'V__Lift1' ){ archi.push('1'); }
	if(_archi[k] == 'Lift1__V' ){ archi.push('3'); }
	if(_archi[k] == 'B__U' ){ archi.push('0'); }
	if(_archi[k] == 'U__B' ){ archi.push('2'); }
	
	if(_archi[k] == 'C__V' ){ archi.push('2'); }
	if(_archi[k] == 'V__C' ){ archi.push('0'); }

	if(_archi[k] == 'U__V' ){ archi.push('0'); }
	if(_archi[k] == 'V__U' ){ archi.push('2'); }

	if(_archi[k] == 'C__D' ){ archi.push('3'); }
	if(_archi[k] == 'D__C' ){ archi.push('1'); }
	if(_archi[k] == 'C__H' ){ archi.push('1'); }
	if(_archi[k] == 'H__C' ){ archi.push('3'); }
	if(_archi[k] == 'D__MassaOffice' ){ archi.push('3'); }
	if(_archi[k] == 'MassaOffice__D' ){ archi.push('1'); }
	if(_archi[k] == 'D__E' ){ archi.push('0'); }
	if(_archi[k] == 'E__D' ){ archi.push('2'); }
	if(_archi[k] == 'E__DAndreaOffice' ){ archi.push('3'); }
	if(_archi[k] == 'DAndreaOffice__E' ){ archi.push('1'); }
	if(_archi[k] == 'E__F' ){ archi.push('0'); }
	if(_archi[k] == 'F__E' ){ archi.push('2'); }
	if(_archi[k] == 'E__T' ){ archi.push('1'); }
	if(_archi[k] == 'T__E' ){ archi.push('3'); }
	if(_archi[k] == 'F__CasatiOffice' ){ archi.push('0'); }
	if(_archi[k] == 'CasatiOffice__F' ){ archi.push('2'); }
	if(_archi[k] == 'F__G' ){ archi.push('3'); }
	if(_archi[k] == 'G__F' ){ archi.push('1'); }
	if(_archi[k] == 'G__BattistiOffice' ){ archi.push('0'); }
	if(_archi[k] == 'BattistiOffice__G' ){ archi.push('2'); }
	if(_archi[k] == 'T__DKM2Room' ){ archi.push('0'); }
	if(_archi[k] == 'DKM2Room__T' ){ archi.push('2'); }
	if(_archi[k] == 'T__S' ){ archi.push('1'); }
	if(_archi[k] == 'S__T' ){ archi.push('3'); }
	if(_archi[k] == 'S__MediaLab1' ){ archi.push('0'); }
	if(_archi[k] == 'MediaLab1__S' ){ archi.push('2'); }
	if(_archi[k] == 'S__P' ){ archi.push('1'); }
	if(_archi[k] == 'P__S' ){ archi.push('3'); }
	if(_archi[k] == 'P__WirelessNetworkingLab' ){ archi.push('0'); }
	if(_archi[k] == 'WirelessNetworkingLab__P' ){ archi.push('2'); }
	if(_archi[k] == 'P__O' ){ archi.push('1'); }
	if(_archi[k] == 'O__P' ){ archi.push('3'); }
	if(_archi[k] == 'O__PiccoOffice' ){ archi.push('1'); }
	if(_archi[k] == 'PiccoOffice__O' ){ archi.push('3'); }
	if(_archi[k] == 'O__N' ){ archi.push('2'); }
	if(_archi[k] == 'N__O' ){ archi.push('0'); }
	if(_archi[k] == 'O__Q' ){ archi.push('0'); }
	if(_archi[k] == 'Q__O' ){ archi.push('2'); }
	if(_archi[k] == 'Q__R' ){ archi.push('1'); }
	if(_archi[k] == 'R__Q' ){ archi.push('3'); }
	if(_archi[k] == 'Q__DeNataleOffice' ){ archi.push('0'); }
	if(_archi[k] == 'DeNataleOffice__Q' ){ archi.push('2'); }
	if(_archi[k] == 'R__GiunchigliaOffice' ){ archi.push('0'); }
	if(_archi[k] == 'GiunchigliaOffice__R' ){ archi.push('2'); }
	if(_archi[k] == 'N__BruzzoneOffice' ){ archi.push('1'); }
	if(_archi[k] == 'BruzzoneOffice__N' ){ archi.push('3'); }
	if(_archi[k] == 'N__K' ){ archi.push('3'); }
	if(_archi[k] == 'K__N' ){ archi.push('1'); }
	if(_archi[k] == 'K__J' ){ archi.push('3'); }
	if(_archi[k] == 'J__K' ){ archi.push('1'); }
	if(_archi[k] == 'K__L' ){ archi.push('2'); }
	if(_archi[k] == 'L__K' ){ archi.push('0'); }
	if(_archi[k] == 'L__WestStairs' ){ archi.push('1'); }
	if(_archi[k] == 'WestStairs__L' ){ archi.push('3'); }
	if(_archi[k] == 'L__M' ){ archi.push('2'); }
	if(_archi[k] == 'M__L' ){ archi.push('0'); }
	if(_archi[k] == 'M__ConciOffice' ){ archi.push('1'); }
	if(_archi[k] == 'ConciOffice__M' ){ archi.push('3'); }
	if(_archi[k] == 'H__CorniselloMeetingRoom' ){ archi.push('0'); }
	if(_archi[k] == 'CorniselloMeetingRoom__H' ){ archi.push('2'); }
	if(_archi[k] == 'H__I' ){ archi.push('1'); }
	if(_archi[k] == 'I__H' ){ archi.push('3'); }
	if(_archi[k] == 'I__MenToilette' ){ archi.push('2'); }
	if(_archi[k] == 'MenToilette__I' ){ archi.push('0'); }
	if(_archi[k] == 'I__J' ){ archi.push('1'); }
	if(_archi[k] == 'J__I' ){ archi.push('3'); }
	if(_archi[k] == 'J__TerlagoMeetingRoom' ){ archi.push('0'); }
	if(_archi[k] == 'TerlagoMeetingRoom__J' ){ archi.push('2'); }
	if(_archi[k] == 'J__WomenToilette'){archi.push('2'); }
	if(_archi[k] == 'WomenToilette__J'){archi.push('0'); }
}




//Definition of the distances between the arches quantified in steps
var distanze = [];
for (var m = 0; m < _archi.length; m++){
        if(_archi[m] == 'A__B' || _archi[m] == 'B__A'){ distanze.push(', 9 steps; '); }
	if(_archi[m] == 'DKM1Room__A' || _archi[m] == 'A__DKM1Room'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'B__U' || _archi[m] == 'U__B'){ distanze.push(', 4 steps; '); }
	if(_archi[m] == 'B__EastStairs' || _archi[m] == 'EastStairs__B'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'U__Lift2' || _archi[m] == 'Lift2__U'){ distanze.push(', 3 steps; '); }
	if(_archi[m] == 'V__Lift1' || _archi[m] == 'Lift1__V'){ distanze.push(', 3 steps; '); }
	if(_archi[m] == 'U__V' || _archi[m] == 'V__U'){ distanze.push(', 3 steps; '); }
	if(_archi[m] == 'V__C' || _archi[m] == 'C__V'){ distanze.push(', 4 steps; '); }
	if(_archi[m] == 'C__D' || _archi[m] == 'D__C'){ distanze.push(', 6 steps; '); }
	if(_archi[m] == 'C__H' || _archi[m] == 'H__C'){ distanze.push(', 5 steps; '); }
	if(_archi[m] == 'D__MassaOffice' || _archi[m] == 'MassaOffice__D'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'D__E' || _archi[m] == 'E__D'){ distanze.push(', 6 steps; '); }	
	if(_archi[m] == 'E__DAndreaOffice' || _archi[m] == 'DAndreaOffice__E'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'E__F' || _archi[m] == 'F__E'){ distanze.push(', 3 steps; '); }
	if(_archi[m] == 'E__T' || _archi[m] == 'T__E'){ distanze.push(', 6 steps; '); }
	if(_archi[m] == 'F__CasatiOffice' || _archi[m] == 'CasatiOffice__F'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'F__G' || _archi[m] == 'G__F'){ distanze.push(', 5 steps; '); }
	if(_archi[m] == 'G__BattistiOffice' || _archi[m] == 'BattistiOffice__G'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'T__DKM2Room' || _archi[m] == 'DKM2Room__T'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'T__S' || _archi[m] == 'S__T'){ distanze.push(', 20 steps; '); }
	if(_archi[m] == 'S__MediaLab1' || _archi[m] == 'MediaLab1__S'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'S__P' || _archi[m] == 'P__S'){ distanze.push(', 15 steps; '); }
	if(_archi[m] == 'P__WirelessNetworkingLab' || _archi[m] == 'WirelessNetworkingLab__P'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'O__P' || _archi[m] == 'P__O'){ distanze.push(', 6 steps; '); }
	if(_archi[m] == 'O__PiccoOffice' || _archi[m] == 'PiccoOffice__O'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'O__N' || _archi[m] == 'N__O'){ distanze.push(', 6 steps; '); }
	if(_archi[m] == 'O__Q' || _archi[m] == 'Q__O'){ distanze.push(', 4 steps; '); }
	if(_archi[m] == 'Q__R' || _archi[m] == 'R__Q'){ distanze.push(', 5 steps; '); }
	if(_archi[m] == 'Q__DeNataleOffice' || _archi[m] == 'DeNataleOffice__Q'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'R__GiunchigliaOffice' || _archi[m] == 'GiunchigliaOffice__R'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'N__BruzzoneOffice' || _archi[m] == 'BruzzoneOffice__N'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'N__K' || _archi[m] == 'K__N'){ distanze.push(', 6 steps; '); }
	if(_archi[m] == 'K__J' || _archi[m] == 'J__K'){ distanze.push(', 8 steps; '); }
	if(_archi[m] == 'K__L' || _archi[m] == 'L__K'){ distanze.push(', 11 steps; '); }
	if(_archi[m] == 'L__M' || _archi[m] == 'M__L'){ distanze.push(', 14 steps; '); }
	if(_archi[m] == 'L__WestStairs' || _archi[m] == 'WestStairs__L'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'M__ConciOffice' || _archi[m] == 'ConciOffice__M'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'H__CorniselloMeetingRoom' || _archi[m] == 'CorniselloMeetingRoom__H'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'H__I' || _archi[m] == 'I__H'){ distanze.push(', 6 steps; '); }
	if(_archi[m] == 'I__MenToilette' || _archi[m] == 'MenToilette__I'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'I__J' || _archi[m] == 'J__I'){ distanze.push(', 20 steps; '); }
	if(_archi[m] == 'J__TerlagoMeetingRoom' || _archi[m] == 'TerlagoMeetingRoom__J'){ distanze.push(', 1 step; '); }
	if(_archi[m] == 'J__WomenToilette' || _archi[m] == 'WomenToilette__J'){ distanze.push(', 1 step; '); }
}




// summation of the total arches to cover
var somma = archi.length;


// the array "indicazione" will contains the indication right,left,straight on
var indicazione = []; 
var i = 0;
var numero_archi;
var somma_archi_SHORTEST_PATH=somma;

// definition of direction

	for(numero_archi = 0; numero_archi < somma_archi_SHORTEST_PATH; numero_archi++){   
	 
       if(dir == archi[i]){ indicazione.push('straight on');
	} else if(dir!=archi[i]){
		 if(dir == 1 && archi[i] == 0){ indicazione.push('left');}
		 if(dir == 1 && archi[i] == 2){ indicazione.push('right');}
		 if(dir == 1 && archi[i] == 3){ indicazione.push('straight on');}
		 
		 if(dir == 2 && archi[i] == 1){ indicazione.push('left');}
		 if(dir == 2 && archi[i] == 3){ indicazione.push('right');}
		 if(dir == 2 && archi[i] == 0){ indicazione.push('error');}

		 if(dir == 3 && archi[i] == 2){ indicazione.push('left');}
		 if(dir == 3 && archi[i] == 0){ indicazione.push('right');}
		 if(dir == 3 && archi[i] == 1){ indicazione.push('error');}

		 if(dir == 0 && archi[i] == 3){ indicazione.push('left');}
		 if(dir == 0 && archi[i] == 1){ indicazione.push('right');}
		 if(dir == 0 && archi[i] == 2){ indicazione.push('straight on');}
	         

           }
       dir = archi[i];
       i++;
}



// we add to the array "indicazione" the distance in "steps"
for( var z = 0; z < indicazione.length; z++){

     indicazione[z] = indicazione[z]+distanze[z]; 
	
}

console.log(indicazione);


return indicazione;
}

module.exports = FindPath;
