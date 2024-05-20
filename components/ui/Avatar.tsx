import { View } from './Themed';
import { Image } from 'expo-image';

interface AvatarProps {
    url: string;
    size: number;
}

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const Avatar: React.FC<AvatarProps> = ({ url, size }) => {
    return (
        <Image
            style={{
                width: size,
                aspectRatio: 1,
                borderRadius: size / 2,

            }}
            source={{ uri: url }}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
        />
    )
}

export default Avatar
