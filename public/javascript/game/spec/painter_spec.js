describe("Painter", function() {
  var stub_canvas = {
    width: Math.random(),
    height: Math.random()
  };
  var stub_context, painter;
  var position;

  beforeEach(function() {
    stub_context = {
      canvas: stub_canvas,
      drawImage: jasmine.createSpy("stub_context.drawImage"),
      fillRect: jasmine.createSpy("stub_context.clearRect")
    };
    painter = new Painter(stub_context);
    painter.images = {
      tank_bullet: "stub_image_tank_bullet",
      tank: "stub_image_tank",
      invader: "stub_image_invader",
      invader_bullet: "stub_image_invader_bullet"
    };
    var x = Math.random();
    var y = Math.random();
    position = new Position(x, y);
  });

  describe("draw_bullet", function() {
    it("should draw the tank bullet image at the specified position", function() {
      painter.draw_bullet(position);

      expect(stub_context.drawImage).toHaveBeenCalledWith(painter.images.tank_bullet, position.x, position.y);
    });
  });

  describe("draw_invader_bullet", function() {
    it("should draw the invader bullet at the specified position", function() {
      painter.draw_invader_bullet(position);

      expect(stub_context.drawImage).toHaveBeenCalledWith(painter.images.invader_bullet, position.x, position.y);
    });
  });

  describe("draw_tank", function() {
    it("should draw the tank image at the specified position", function() {
      painter.draw_tank(position);

      expect(stub_context.drawImage).toHaveBeenCalledWith(painter.images.tank, position.x, position.y);
    });
  });

  describe("draw_invader", function() {
    it("should draw the invader image at the specified position", function() {
      painter.draw_invader(position);

      expect(stub_context.drawImage).toHaveBeenCalledWith(painter.images.invader, position.x, position.y);
    });
  });

  describe("clear", function() {
    it("should blank the screen", function() {
      painter.clear();

      expect(stub_context.fillStyle).toEqual("black");
      expect(stub_context.fillRect).toHaveBeenCalledWith(0, 0, stub_canvas.width, stub_canvas.height);
    });
  });
});
