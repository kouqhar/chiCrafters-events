import { useRef, useEffect } from "react";

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    if (!prevailOnUnmount) document.title = defaultTitle.current;
  }, [prevailOnUnmount]);

  useEffect(() => {
    const titlePrefix = "chiCrafters Events || ";
    document.title = `${titlePrefix}${title.trim()}`;
  }, [title]);
}

export default useDocumentTitle;
