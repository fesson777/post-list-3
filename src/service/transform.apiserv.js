export class TransformService {
  static transformDataToArrayFireBase(dataFB) {
    return Object.keys(dataFB).map((key) => {
      const obj = dataFB[key]
      obj.id = key
      return obj
    })
  }
}
