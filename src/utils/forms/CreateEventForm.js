import {addEvent} from '../../api/event';

export const handleFormSubmit = (formElements) => {
  const formData = new FormData();
  if (formElements.fields.title.value) formData.append('title', formElements.fields.title.value);
  if (formElements.datetime) formData.append('datetime', formElements.datetime);
  if (formElements.fields.address.value) formData.append('address', formElements.fields.address.value);
  if (formElements.fields.phone.value) formData.append('phone', formElements.fields.phone.value);
  if (formElements.fields.shortDescription.value) formData.append('short_description', formElements.fields.shortDescription.value);
  if (formElements.fields.description.value) formData.append('description', formElements.fields.description.value);
  if (formElements.fields.cost.value) formData.append('cost', formElements.fields.cost.value);
  if (formElements.tags) {
    for (let i = 0; i < formElements.tags.length; i++) {
      formData.append('tags', formElements.tags[i]);
    }
  }
  if (formElements.fields.age_limit.value) formData.append('age_limit', formElements.fields.age_limit.value);
  if (formElements.image) formData.append('image', formElements.image, formElements.image.name);
  return addEvent(formData);
};