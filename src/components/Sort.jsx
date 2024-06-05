import Select from 'react-select';

const options = [
  { value: 'default', label: 'Sort by default' },
  { value: 'packed', label: 'Sort by packed' },
  { value: 'unpacked', label: 'Sort by unpacked' },
];

const Sort = ({ setSortBy }) => {
  return (
    <section className="sorting">
      <Select
        defaultValue={options[0]}
        options={options}
        onChange={(option) => setSortBy(option.value)}
      />
    </section>
  );
};
export default Sort;
