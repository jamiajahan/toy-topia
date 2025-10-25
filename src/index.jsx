import { AuthProvider } from './context/AuthContext';
...
createRoot(...).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
