import '@testing-library/jest-dom/vitest';

// react-bootstrap (Modal/Carousel) usa matchMedia; o jsdom não implementa.
if (!window.matchMedia) {
    window.matchMedia = (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false
    });
}
