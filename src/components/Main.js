import React from 'react';

export default (props) => {
  return (
    <div>
      <div>
        <div>
          <p>React boilerplate is rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};
