import { useRef, useEffect } from 'react';

const createRootElement = (id: string) => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
};

const addRootElement = (rootElem: Element): void => {
  document.body.insertBefore(rootElem, (document as any).body.lastElementChild.nextElementSibling);
};

const usePortal = (id: string): HTMLElement => {
  const rootElemRef: any = useRef(null);

  useEffect(
    function setupElement() {
      // Look for existing target dom element to append to
      const existingParent = document.querySelector(`#${id}`);
      // Parent is either a new root or the existing dom element
      const parentElem = existingParent ?? createRootElement(id);
      // If there is no existing DOM element, add a new one.
      if (!existingParent) {
        addRootElement(parentElem);
      }

      // Add the detached element to the parent
      parentElem.appendChild(rootElemRef.current);

      return function removeElement() {
        rootElemRef.current.remove();
        if (!parentElem.childElementCount) {
          parentElem.remove();
        }
      };
    },
    [id]
  );

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  };

  return getRootElem();
};

export default usePortal;
