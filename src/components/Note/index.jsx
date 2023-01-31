import { Container } from "./styles";

import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <div className="icons">
        <Rating grade={data.rating} isBigSize={false} />
      </div>
    
      <p>{data.description}</p>

      {
        data.tags && (
        <footer>
          { data.tags.map(tag => (
              <Tag key={tag.id} title={tag.name} />
            ))}
        </footer>

      )}
    </Container>
  );
}