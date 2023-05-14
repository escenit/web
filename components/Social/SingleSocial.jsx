import parse from 'html-react-parser'

const SingleSocial = ({social}) => {
    const {title, path} = social;
    return (
        <>
            <a style={{"--color": social.color}} className="social-link social-link--dribbble " id="dribbble"
               href={social.url} target="_blank" rel="noreferrer">
                <svg className="social-svg" viewBox="0 0 600 600"
                     xmlns="http://www.w3.org/2000/svg">
                    <title>
                        {title}
                    </title>
                    <g className="social-group dark:stroke-white dark:fill-transparent" fill="none">
                        <circle className="social-group__outline social-group stroke-dark dark:stroke-white"
                                strokeWidth="20" cx="300"
                                cy="300"
                                r="262.5"/>
                        <circle className="social-group__inner-circle" cx="300"
                                cy="300"
                                r="252.5"/>
                        {parse(path)}
                    </g>
                </svg>
            </a>
        </>
    );
};

export default SingleSocial;
