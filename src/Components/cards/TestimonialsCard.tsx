import { TestimonialsCardProps } from "../../models"


export default function TestimonialsCard({ name, avatar, nickname, review }: TestimonialsCardProps) {
  return (
    <div className="testimItemContainer">
      <div className="testimUpper">
          {avatar}
        <div className="testimUpperRight">
          <div>{name}</div>
          <div>{nickname}</div>
        </div>
      </div>
      <div className="testimLower">
        <p>{review}</p>
      </div>
    </div>
  )
}