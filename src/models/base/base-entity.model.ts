import Base from './base.model';

export default class BaseEntity extends Base{
    public createdDate?: Date;
    public updatedDate?: Date;
    public createdBy?: string;
    public updatedBy?: string;
}