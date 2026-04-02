import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '2em' }}>
      <h1>OpsMind AI</h1>
      <p>Ask a question about your company's SOPs:</p>
      <form>
        <input type="text" placeholder="Type your question..." style={{ width: '300px', padding: '0.5em' }} />
        <button type="submit" style={{ marginLeft: '1em', padding: '0.5em 1em' }}>Ask</button>
      </form>
      <div id="answer" style={{ marginTop: '2em' }}></div>
    </div>
  );
}

export default App;
