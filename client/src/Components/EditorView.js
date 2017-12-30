import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/EditorView.css';

class EditorView extends Component {
  render() {
      
    let onTabPress = () => {
        
    }

    return (
      <section id="editor-view">
        <div className="editor-container">
              <div className="editor">
                  <textArea onKeyPress></textArea>
              </div>
        </div>
       </section>
    );
  }
}



export default EditorView;
