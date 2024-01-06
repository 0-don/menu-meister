const defaultAnnouncements = {
  onDragStart(id: any) {
    console.log(`Picked up draggable item ${id}.`);
  },
  onDragOver(id: any, overId: any) {
    if (overId) {
      console.log(
        `Draggable item ${id} was moved over droppable area ${overId}.`
      );
      return;
    }

    console.log(`Draggable item ${id} is no longer over a droppable area.`);
  },
  onDragEnd(id: any, overId: any) {
    if (overId) {
      console.log(
        `Draggable item ${id} was dropped over droppable area ${overId}`
      );
      return;
    }

    console.log(`Draggable item ${id} was dropped.`);
  },
  onDragCancel(id: any) {
    console.log(`Dragging was cancelled. Draggable item ${id} was dropped.`);
  }
};

export default defaultAnnouncements;
