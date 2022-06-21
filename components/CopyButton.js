import useClipboard from "react-use-clipboard";

const CopyButton = ({ text }) => {
  const [isCopied, setCopied] = useClipboard(text);

  return (
    <button
      onClick={setCopied}
      className="text-gray-900 dark:text-white text-xs mt-2"
    >
      {isCopied ? `Copied` : `Copy Code`}
    </button>
  );
};

export default CopyButton;
