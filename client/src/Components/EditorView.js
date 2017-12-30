import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/EditorView.css';

class EditorView extends Component {
  render() {
      
    let onTabPress = () => {
        
    }

    return (
       <div className="editor-container">
            <div className="editor">
                <textArea onKeyPress></textArea>
            </div>
       </div>
    );
  }
}



export default EditorView;
