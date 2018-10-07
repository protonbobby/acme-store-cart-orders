export const activeNav = (value, path, fuzzy = false) => {
  if (value === path || (fuzzy && path.indexOf(value) === 0)) {
    return 'active';
  }
  return '';
}


export const inactiveNav = (value, path, fuzzy = false) => {
  let style = {};
  value === path || (fuzzy && path.indexOf(value) === 0) ?
    null
    :
    [style.color = 'white',
    style.borderColor = 'white',
    style.borderWidth = 1,
    style.borderStyle = 'solid']
    ;
  return style;
}
