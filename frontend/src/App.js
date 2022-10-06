import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { BlogForm } from './pages/BlogForm';
import { Navbar } from './components/Navbar';
import { BlogDetail } from './pages/BlogDetail';
function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/write' element={<BlogForm />} />
            <Route path='/about' element={<About />} />
            <Route path='/blogdetail/:id' element={<BlogDetail s/>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
