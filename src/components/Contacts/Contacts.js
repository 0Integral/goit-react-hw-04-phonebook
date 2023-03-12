import PropTypes from 'prop-types';

import { ContactsItem, ContactInfo, ContactsButton } from './Contacts.styled';

export function Contacts({ contactsInfo, onDelete }) {
  return (
    <div>
      <ul>
        {contactsInfo().map(({ id, name, number }, index) => (
          <ContactsItem key={id}>
            <ContactInfo>
              <span>{name}</span>: <span>{number}</span>
            </ContactInfo>
            <ContactsButton id={index} onClick={onDelete} type="button">
              Delete
            </ContactsButton>
          </ContactsItem>
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contactsInfo: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
