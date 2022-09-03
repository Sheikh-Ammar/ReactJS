import './App.css';
import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Components/Plan';

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleInputValue = (e) => {
    setText(e.target.value);
  }
  const handleAdd = () => {
    if(text != ""){
      const NewItem = [...items, text];
      setItems(NewItem);
      setText("");
    }
  }
  const handleDelete = (id) => {
    const OldItem = [...items,]
    const updateItem = OldItem.filter((element, i)=>{
      return i != id;
    })
    setItems(updateItem);
  }
  return (
    <>
    <div className="container-fluid my-5">
      <div className='row'>
        <div className='col-md-6 mx-auto text-white shadow-lg p-3'>
          <h1 className='text-center'>To Do List</h1>

          <div className='row my-3'>
          <div className='col-md-9'>
            <input type="text" className='form-control' placeholder='Write Tour Today Plan ?' value={text} onChange={handleInputValue}/>
          </div>
          <div className='col-md-2'>
          <button type="button" className="btn btn-success px-5 font-weight-bold" onClick={handleAdd}>Add</button>
          </div>

          <div className="container-fluid">
            <ul className='list-unstyled my-5'>
              {/* <Plan />
              {console.log(items)} */}
              {
              items.map((value, i)=>{
                return <Plan key={i} id={i} value={value} delete={handleDelete}/>
              })
              }
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
