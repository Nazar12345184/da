function SquishButton({ children }) {
  return (
    <button
      style={{ transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)' }}
      onPointerDown={(e) => {
        e.currentTarget.style.transition = 'transform 0.08s ease-out';
        e.currentTarget.style.transform = 'scale(0.88)';
      }}
      onPointerUp={(e) => {
        e.currentTarget.style.transition =
          'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {children}
    </button>
  );
}