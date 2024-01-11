import './flex.css';

interface Props {
    children?: React.ReactNode,
    justify?: string,
    aling?: string,
    column?: boolean,
    w?: string | number,
    h?: string | number
}



const Flex = ({ children,
    w = '100%',
    h = '100%',
    justify = 'flex-start',
    aling = 'flex-start',
    column = false }: Props) => {
    return (
        <>
            <div className="flex-container"
                style={{
                    display: 'flex',
                    justifyContent: justify,
                    alignItems: aling,
                    flexDirection: column ? 'column' : 'row',
                    width: w,
                    height: h
                }}>
                {children}
            </div>
        </>
    )
};

export default Flex;