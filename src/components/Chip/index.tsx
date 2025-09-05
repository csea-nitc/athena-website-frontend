import styles from './styles.module.css';


/**
 * Global component for chips
 * 
 * 
 * @param {string} [ChipProps.text] -- text to displayed within the chip
 * @param {boolean} [ChipProps.disableShadow] - disable the drop dhadow (defaults to false)
 * @returns {JSX.Element} the rendered Chip component
 * 
 * @author Diljith P D
 */
const Chip = ({
    text,
    disableShadow = false
}: ChipProps): JSX.Element => {
    return (
        <span className={styles.chip}>
            <span className={disableShadow ? '' : styles.glowEffect}>
                {text}
            </span>
        </span>
    )
}

export default Chip;
export interface ChipProps {
    text: string,
    disableShadow?: boolean;
}