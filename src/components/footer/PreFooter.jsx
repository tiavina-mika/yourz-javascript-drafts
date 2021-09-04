import { mq } from '../../styles/styles';
import Typography from '../Typography';

const features = [
  {
    text1: 'livraison offerte',
    text2: 'à partir de 30 €',
    image: 'giftbox',
  },
  {
    text1: 'paiements',
    text2: 'très sécurisés',
    image: 'unlock',
  },
  {
    text1: 'Une question ?',
    text2: 'Besoin d\'aide?',
    image: 'question-mark',
  },
];

const classes = {
  preFooter: mq({
    height: [400, 297],
    backgroundImage: 'url("/images/pre-footer-bg.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top',
    backgroundSize: 'cover',
  }),
  features: mq({
    width: ['100%', false, false, 976],
    padding: 15,
  }),
  feature: {
    maxWidth: 170,
  },
  imageContainer: {
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
  },
};

const PreFooter = () => {
  return (
    <div className="flexRow justifyCenter alignCenter stretchSelf" css={classes.preFooter}>
      <div className="flexRow spaceBetween" css={classes.features}>
        {features.map(({ text1, text2, image }, index) => (
          <div
            className="flexCenter"
            key={index}
            css={classes.feature}
          >
            <div css={classes.imageContainer}>
              <img alt={image} src={'/icons/' + image + '.svg'} />
            </div>
            <div className="flexCenter flex1">
              <Typography variant="paragraph" theme="light" css={classes.text}>
                {text1}
                <br />
                { text2}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreFooter;
