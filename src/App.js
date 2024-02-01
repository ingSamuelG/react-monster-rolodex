// import { Component } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./componets/card-list/card-list.component";
import SearchBox from "./componets/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((jUsers) => {
        setMonsters(jUsers);
      });
  }, []);

  useEffect(() => {
    const new_filterd_monsters = monsters.filter((monst) => {
      return monst.name.toLowerCase().includes(searchField);
    });

    setFilteredMonster(new_filterd_monsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-tittle">Monster Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        placeholder="Buscar monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList elements={filteredMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       searchField: "",
//       monsters: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((jUsers) =>
//         this.setState(() => {
//           return {
//             searchField: "",
//             monsters: jUsers,
//           };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState({ searchField });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const new_filterd_monsters = monsters.filter((monst) => {
//       return monst.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-tittle">Monster Rolodex</h1>
//         <SearchBox className="monster-search-box" placeholder="Buscar monsters" onChangeHandler={onSearchChange}/>
//         <CardList elements={new_filterd_monsters}/>
//       </div>
//     );
//   }
// }

export default App;
