import ClassRoom from './0-classroom';

function initializeRooms() {
  const classRoomSizes = [19, 20, 34];
  const classRooms = classRoomSizes.map((size) => new ClassRoom(size));
  return classRooms;
}
export default initializeRooms;
