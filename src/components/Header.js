// Make a `Header` component as a child of `App`. It should return:

// - a `<header>` element with the following elements inside:
//   - an `<h1>` with the _name_ of the blog, passed as a prop

function Header({name}) {
    return (
      <header>
          <h1>{name}</h1>
      </header>
    );
  }
  
  export default Header;