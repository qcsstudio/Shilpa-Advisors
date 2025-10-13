import parse from 'html-react-parser';

const SectionTitle = ({Title}) => {
    return (
        <div className='mt-5'>
            <h1>{parse(Title)}</h1>
        </div>
    );
};

export default SectionTitle;