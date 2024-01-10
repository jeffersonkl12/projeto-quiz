import './flex.css';

interface Props {
    children?: React.ReactNode,
    justify?:  string,
    aling?:  string,
    row?:  boolean,
}



const Flex = ({ children,
    justify = 'flex-start',
    aling = 'flex-start',
    row = true }: Props) => {
    return (
        <>
            <div className="flex-container"
                style={{ display: 'flex',
                    justifyContent: justify,
                    alignItems: aling,
                    flexDirection: row ? 'row': 'column'}}>
                {children}
            </div>
        </>
    )
};

export default Flex;