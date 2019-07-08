import '../assets/styles/footer.styl'
export default {
  data() {
    return {
      author: 'liangqingfeng'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>this is {this.author}</span>
      </div>
    )
  }
}