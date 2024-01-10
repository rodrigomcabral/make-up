
export default function CheckBoxInput({
  labelDescription = "Checkbox description: ",
  inputValue = "Default input value",
  onCheckboxChange = null,
  id = "id_checkbox_input",
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }

  return (
    <div className="flex flex-row items-center space-x-2 my-4">
      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-1"
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
      />

      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
    </div>
  );
}
