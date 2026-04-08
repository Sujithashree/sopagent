import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Segoe UI, sans-serif', background: '#f8f9fa', minHeight: '100vh' }}>
      <header style={{ background: '#4b2aad', color: 'white', padding: '2rem 0', textAlign: 'center', boxShadow: '0 2px 8px #e0e0e0' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>OpsMind AI</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Context-Aware Corporate Knowledge Brain</p>
      </header>
      <main style={{ maxWidth: 900, margin: '2rem auto', background: 'white', borderRadius: 12, boxShadow: '0 2px 16px #e0e0e0', padding: '2rem' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#4b2aad' }}>What is OpsMind AI?</h2>
          <p>
            OpsMind AI is an Enterprise SOP Agent that instantly answers employee questions by reading Standard Operating Procedures (SOPs) from uploaded PDFs, citing exact sources, and preventing hallucinations.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#4b2aad' }}>Core Features</h2>
          <ul style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            <li><b>RAG Pipeline:</b> Upload PDFs, chunk text, generate vector embeddings, and store in MongoDB for semantic search.</li>
            <li><b>Source Citation:</b> Every answer includes the exact SOP source and section.</li>
            <li><b>Admin Knowledge Base:</b> Secure upload, delete, and manage SOPs with automatic re-indexing.</li>
            <li><b>Chat Agent:</b> Natural language Q&A with streaming responses and hallucination prevention.</li>
            <li><b>Modern UI:</b> Clean, responsive interface for both employees and admins.</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#4b2aad' }}>How It Works</h2>
          <ol style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            <li>Admins upload SOP PDFs via the secure portal.</li>
            <li>System parses, chunks, and embeds the documents.</li>
            <li>Employees ask questions in chat; the agent retrieves the most relevant SOP chunks and cites the source.</li>
            <li>All answers are grounded in your company’s official documentation.</li>
          </ol>
        </section>
        <section>
          <h2 style={{ color: '#4b2aad' }}>Get Started</h2>
          <p>Contact your admin to upload SOPs, or <b>log in</b> to the admin portal to manage documents.</p>
          <p style={{ marginTop: '1rem', color: '#888' }}><i>Demo: Ask "How do I process a refund?"</i></p>
        </section>
      </main>
      <footer style={{ textAlign: 'center', color: '#aaa', padding: '1rem 0' }}>
        &copy; {new Date().getFullYear()} OpsMind AI &mdash; Enterprise SOP Agent
      </footer>
    </div>
}

export default App;
