import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../components/reuseables/SearchBox.js';

const mockSetSearchWord = jest.fn()

describe("Search Box", ()=>{

    it('should render searchBox', () => {
        render(<SearchBox 
                searchWord="" 
                setSearchWord={mockSetSearchWord}/>);
        const searchBox = screen.getByPlaceholderText(/movie name/i);
        expect(searchBox).toBeInTheDocument();
      });
      
      it('should be able to type into searchBox', () => {
        render(<SearchBox 
                searchWord="Avatar" 
                setSearchWord={mockSetSearchWord}/>);
        const searchBox = screen.getByPlaceholderText(/movie name/i);
        fireEvent.change(searchBox, {target: { value: "Avatar"}})
        expect(searchBox.value).toBe("Avatar");
      });

})
