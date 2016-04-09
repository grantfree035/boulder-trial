class Button {

  constructor(id, states) {
    // instance variables
    this._id          = id;
    this._states      = {};
    this._activeState = this._states[0].stateName; // initial state

    // structure states
    for (let state of states) {
      let stateName = state.stateName;
      let icon      = state.icon;
      let onClick   = state.onClick;
      this._states[stateName] = {icon, onClick};
    }

    // create button
    let inline    = document.createElement('span');
    this._button  = document.createElement('button');
    this._button.appendChild(inline);
    this._button.id       = this._id;
    this._button.onclick  = this._onClick;
  }

  set state(stateName) {
    // update model
    this._activeState = stateName;

    // update DOM - only change icon
    let button = document.getElementById(this._id);
    button.children[0].className = this.state().icon;
  }

  get state() {
    return this._states[this._activeState];
  }

  addTo(element) {
    // append to element
    element.appendChild(this._button);

    // initalize state
    this.state(this._activeState);
  }

  _onClick() {
    // call active state's onclick
    // pass button for reference
    this.state().onClick(this);
  }
}

module.exports = Button;
