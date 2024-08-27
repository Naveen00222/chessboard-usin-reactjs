
import './App.css';
import whitePawn from './assets/whitepawn.png';
import blackPawn from './assets/blackpawn.png';
import whiteKnight from './assets/whiteknight.png';
import blackKnight from './assets/blackknight.png';
import whiteBishop from './assets/whitebishop.png';
import blackBishop from './assets/blackbishop.png';
import whiteRook from './assets/whiterook.png';
import blackRook from './assets/blackrook.png';
import whiteQueen from './assets/whitequeen.png';
import blackQueen from './assets/blackqueen.png';
import whiteKing from './assets/whiteking.png';
import blackKing from './assets/blackking.png';

// chess layout
function App() {

  return (
    <div className="App">
     <table className="chessboard">
      <tr colspan='8' className='row1'>
        <td className='black' id='r1c1'><img src={blackRook}></img></td>
        <td className='white' id='r1c2'><img src={blackKnight}></img></td>
        <td className='black' id='r1c3'><img src={blackBishop}></img></td>
        <td className='white' id='r1c4'><img src={blackKing}></img></td>
        <td className='black' id='r1c5'><img src={blackQueen}></img></td>
        <td className='white' id='r1c6'><img src={blackBishop}></img></td>
        <td className='black' id='r1c7'><img src={blackKnight}></img></td>
        <td className='white' id='r1c8'><img src={blackRook}></img></td>
      </tr>

      <tr className='row2'>
        <td className='white' id='r2c1'><img src={blackPawn}></img></td>
        <td className='black' id='r2c2'><img src={blackPawn}></img></td>
        <td className='white' id='r2c3'><img src={blackPawn}></img></td>
        <td className='black' id='r2c4'><img src={blackPawn}></img></td>
        <td className='white' id='r2c5'><img src={blackPawn}></img></td>
        <td className='black' id='r2c6'><img src={blackPawn}></img></td>
        <td className='white' id='r2c7'><img src={blackPawn}></img></td>
        <td className='black' id='r2c8'><img src={blackPawn}></img></td>
      </tr>

      <tr className='row3'>
        <td className='black' id='r3c1'></td>
        <td className='white' id='r3c2'></td>
        <td className='black' id='r3c3'></td>
        <td className='white' id='r3c4'></td>
        <td className='black' id='r3c5'></td>
        <td className='white' id='r3c6'></td>
        <td className='black' id='r3c7'></td>
        <td className='white' id='r3c8'></td>
      </tr>

      <tr className='row4'>       
        <td className='white' id='r4c1'></td>
        <td className='black' id='r4c2'></td>
        <td className='white' id='r4c3'></td>
        <td className='black' id='r4c4'></td>
        <td className='white' id='r4c5'></td>
        <td className='black' id='r4c6'></td>
        <td className='white' id='r4c7'></td>
        <td className='black' id='r4c8'></td>
      </tr>

      <tr className='row5'>
        <td className='black' id='r5c1'></td>
        <td className='white' id='r5c2'></td>
        <td className='black' id='r5c3'></td>
        <td className='white' id='r5c4'></td>
        <td className='black' id='r5c5'></td>
        <td className='white' id='r5c6'></td>
        <td className='black' id='r5c7'></td>
        <td className='white' id='r5c8'></td>
      </tr>

      <tr className='row6'>
        <td className='white' id='r6c1'></td>
        <td className='black' id='r6c2'></td>
        <td className='white' id='r6c3'></td>
        <td className='black' id='r6c4'></td>
        <td className='white' id='r6c5'></td>
        <td className='black' id='r6c6'></td>
        <td className='white' id='r6c7'></td>
        <td className='black' id='r6c8'></td>
      </tr>

      <tr className='row7'>
        <td className='black' id='r7c1'><img src={whitePawn}></img></td>
        <td className='white' id='r7c2'><img src={whitePawn}></img></td>
        <td className='black' id='r7c3'><img src={whitePawn}></img></td>
        <td className='white' id='r7c4'><img src={whitePawn}></img></td>
        <td className='black' id='r7c5'><img src={whitePawn}></img></td>
        <td className='white' id='r7c6'><img src={whitePawn}></img></td>
        <td className='black' id='r7c7'><img src={whitePawn}></img></td>
        <td className='white' id='r7c8'><img src={whitePawn}></img></td>
      </tr>

      <tr className='row8'>
        <td className='white' id='r8c1'><img src={whiteRook}></img></td>
        <td className='black' id='r8c2'><img src={whiteKnight}></img></td>
        <td className='white' id='r8c3'><img src={whiteBishop}></img></td>
        <td className='black' id='r8c4'><img src={whiteQueen}></img></td>
        <td className='white' id='r8c5'><img src={whiteKing}></img></td>
        <td className='black' id='r8c6'><img src={whiteBishop}></img></td>
        <td className='white' id='r8c7'><img src={whiteKnight}></img></td>
        <td className='black' id='r8c8'><img src={whiteRook}></img></td>
      </tr>

     </table>
    </div>
  );
}

export default App;
