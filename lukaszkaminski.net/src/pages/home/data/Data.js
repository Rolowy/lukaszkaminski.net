const Data = [
  {
    title: "Simple key event",
    code: `export default function Example() {
        useEffect(() => {
            const log = (e) => {
                window.alert('pressed', e.key);
            }
    
            window.addEventListener('keypress', log);
        }
    }
    
    return (
        <>Press any key!: :)</>
    )
}`,
tags: "key, event"
  },
  {
    title: "Random Title 2",
    code: "<code>Test2</code>",
    tags: ""
  },
  {
    title: "Random Title 3",
    code: "<code>Test3</code>",
    tags: ""
  },
];

export default Data;
