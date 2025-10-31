import parse from 'html-react-parser';

const SectionTitle = ({Title,Content}) => {
    return (
        <div className='mt-5'>
            <h1>{Title}</h1>
            <p>{Content}</p>
            {/* <p>(Add ConTent Here)</p> */}
        </div>
    );
};

export default SectionTitle;