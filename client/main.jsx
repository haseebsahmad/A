import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';

Meteor.startup(() => {
  render(<App/>, document.getElementById('root'));
  ReactDOM.render(
  <React.StrictMode>
    <Slider/>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <RecentlyAdded/>
  </React.StrictMode>,
  document.getElementById('main')
);
ReactDOM.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('footer')
);
});
