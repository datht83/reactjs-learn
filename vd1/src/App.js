import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function One() {
   return (
    <div>
      <div> cach 1-1</div>
      <div> cach 1-2</div> 
    </div> 
   )
}
var Two = function(){
  return (
    <div> 
      <h1> Cach so 2 </h1>
    </div>
  )  
}
var Three = () => (
  <div>
    <h1>cach 3</h1>
  </div>
)
class Four extends Component {
  render() {
    return (
      <div>
        <h1>cach so 4 - class component</h1>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="accordianId" role="tablist" aria-multiselectable="true">
            <div class="card">
              <div class="card-header" role="tab" id="section1HeaderId">
                <h5 class="mb-0">
                  <a data-toggle="collapse" data-parent="#accordianId" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                    Section 1
                  </a>
                </h5>
              </div>
              <div id="section1ContentId" class="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                <div class="card-body">
                  Section 1 content
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" role="tab" id="section2HeaderId">
                <h5 class="mb-0">
                  <a data-toggle="collapse" data-parent="#accordianId" href="#section2ContentId" aria-expanded="true" aria-controls="section2ContentId">
                    Section 2
                  </a>
                </h5>
              </div>
              <div id="section2ContentId" class="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                <div class="card-body">
                  Section 2 content
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
