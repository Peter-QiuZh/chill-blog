export default function Footer() {
  return (
    <footer className="mt-2 px-2 py-6">
      <div className="flex items-center space-x-2 pt-6 text-xs text-gray-500 border-t border-gray-100">
        <p>ChillWay &copy; {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
}
