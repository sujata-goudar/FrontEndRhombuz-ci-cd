import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import SearchIcon from '../search-component/assets/icons/SearchIcon.js';
import {
  // IconCon,
  // IconWrapper,
  InputSearch,
  SearchInputContainer,
  SearchWrapper,
} from './index.sc.js';
// import ClearIcon from '../search-component/assets/icons/Clear.js';
function SearchComponent(props) {
  const {
    name,
    defaultValue,
    value,
    placeholder = 'Search Keywords, multiple keywords or query',
    onChange,
    // onClick,
    onFocus,
    onBlur,
    // chip = false,
    disabled = false,
    isFocused = false,
  } = props;

  const inputRef = useRef(null);
  // const [searchValues, setSearchValues] = useState([]);
  const [isIconContainerHovered, setIsIconContainerHovered] = useState(false);

  // const handleKeyDown = (e) => {
  //   if (e?.key === 'Enter') {
  //     const returnValue = e.target.value;
  //     if (!returnValue) return;
  //     if (chip) {
  //       setSearchValues((old) => [...old, returnValue]);
  //       onClick && onClick(e.target.name, [...searchValues, returnValue]);
  //     } else {
  //       onClick && onClick(e.target.name, returnValue);
  //     }
  //   }
  // };

  // const handleButtonClick = (e) => {
  //   if (inputRef) {
  //     const returnValue = inputRef.current.value;
  //     if (chip) {
  //       setSearchValues((old) => [...old, returnValue]);
  //       onClick &&
  //         onClick(inputRef.current.name, [...searchValues, returnValue]);
  //     } else {
  //       onClick && onClick(inputRef.current.name, returnValue);
  //     }
  //   }
  // };

  const handleChange = (event) => {
    onChange && onChange(event);
  };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   onChange({ target: { name, value: '' } });
  // };

  const handleInputFocus = () => {
    onFocus && onFocus();
    setIsIconContainerHovered(true);
  };

  const handleInputBlur = () => {
    onBlur && onBlur();
    // setIsIconContainerHovered(false);
  };

  const handleIconContainerMouseEnter = () => {
    setIsIconContainerHovered(true);
  };

  const handleIconContainerMouseLeave = () => {
    if (!isFocused) {
      setIsIconContainerHovered(false);
    }
  };

  useEffect(() => {
    if (!isFocused) {
      setIsIconContainerHovered(false);
    } else {
      setIsIconContainerHovered(true);
    }
  }, [isFocused]);

  return (
    <SearchWrapper>
      <SearchInputContainer
        onMouseEnter={handleIconContainerMouseEnter}
        onMouseLeave={handleIconContainerMouseLeave}
      >
        <InputSearch
          ref={inputRef}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          // onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          isHovered={isIconContainerHovered}
          isFocused={isFocused}
          className={`${disabled ? 'disabled' : ''}`}
          disabled={disabled}
        />
        {/* <IconCon isHovered={isIconContainerHovered}>
          <IconWrapper
            onClick={clearInput}
            className={`clear-icon ${value ? 'active' : 'hidden'}`}
          >
            <ClearIcon strokeColor="#999999" width="14" height="14" />
          </IconWrapper>
           <IconWrapper
            className="search-icon"
            onClick={(e) => handleButtonClick(e)}
          >
            <SearchIcon strokeColor="#999999" width="22" height="22" />
          </IconWrapper>
        </IconCon> */}
      </SearchInputContainer>
    </SearchWrapper>
  );
}

export default SearchComponent;

// Define prop types for InputComponent
SearchComponent.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  // onClick: PropTypes.func,
  // chip: PropTypes.bool,
  disabled: PropTypes.bool,
  isFocused: PropTypes.bool,
};
