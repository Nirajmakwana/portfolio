import '@testing-library/jest-dom';

const matchMediaMock = function (query) {
  return {
    matches: false,
    media: query || '',
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};

window.matchMedia = matchMediaMock;
global.matchMedia = matchMediaMock;
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: matchMediaMock,
});
