export default function DateInput({
  labelDescription = "Label description: ",
  inputValue = "2021-04-30",
  onInputChange = null,
  id = "id_date_input",
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>

      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-1"
        type="date"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
