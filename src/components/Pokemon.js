import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.url} alt="" />
        <h2>{this.props.name}</h2>
        <ul className="">
          {this.props.types.map((types, index) => {
            return (
              <li className="" key={index}>
                <div>
                  <h3>{types}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Pokemon;
