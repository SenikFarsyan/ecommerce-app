import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//selectors
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

//components
import MenuItem from '../menu-item/menu-item.component';
//styles
import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
