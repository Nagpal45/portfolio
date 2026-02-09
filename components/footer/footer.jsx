import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer' role="contentinfo">
        © Copyright {currentYear} &nbsp; • &nbsp; Vaibhav Nagpal
    </footer>
  )
}
