
function Circle(){
    createjs.Shape.call(this);
    this.setCircleType = function(type){
        this._circleType = type;
        switch(type){
            case this.Type_UnSelectCircle:
                this.setColor("#ccc");
                break;
            case this.Type_SelectCircle:
                this.setColor("#f60");
                break;
            case this.Type_Cat:
                this.setColor("#00f");
                break;
        }

    }
    this.Type_UnSelectCircle = 1;
    this.Type_SelectCircle = 2;
    this.Type_Cat = 3;
    this.setColor = function (colorString){
        this.graphics.beginFill(colorString);
        this.graphics.drawCircle(0,0,25);
        this.graphics.endFill();
    }
    this.getCircleType = function(){
        return this._circleType;
    }
    this.setCircleType(1);
}
Circle.prototype = new createjs.Shape();
Circle.Type_UnSelectCircle = 1;
Circle.Type_SelectCircle = 2;
Circle.Type_Cat = 3;